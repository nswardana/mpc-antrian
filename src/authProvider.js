import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

const apiUrl = "http://localhost:2000/api/user/login";
const settingUrl = "http://localhost:2000/api/setting/1";

const httpClient = fetchUtils.fetchJson;

const authProvider = {
    login: ({ username, password }) => {
        const request = new Request(apiUrl, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                console.log("authProvider==>login");
                console.log(JSON.stringify(auth));
                localStorage.setItem('auth', JSON.stringify(auth));
                localStorage.setItem('permissions', JSON.stringify(auth.role_name));

                //get data setting
                const settingRequest = new Request(settingUrl, {
                    method: 'GET',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                });

                fetch(settingRequest)
                    .then(settingRespone => {
                        if (settingRespone.status < 200 || settingRespone.status >= 300) {
                            throw new Error(settingRespone.statusText);
                        }
                        return settingRespone.json();
                    })
                    .then(setting => {
                        console.log("setting", JSON.stringify(setting));
                        localStorage.setItem('setting', JSON.stringify(setting));
                    });
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
    logout: () => {
        localStorage.removeItem('auth');
        localStorage.removeItem('permissions');
        localStorage.removeItem('setting');
        return Promise.resolve();
    },
    /*
    checkAuth: () => localStorage.getItem('auth')
        ? Promise.resolve()
        : Promise.reject({ redirectTo: '/no-access' }),*/
    checkAuth: () => {
        console.log("checkAuth", localStorage.getItem('auth'));

        if (!localStorage.getItem('auth'))
            return Promise.reject({ redirectTo: '/no-access' });
        else
            return Promise.resolve();
    },

    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    getIdentity: () => {
        try {
            const { id, fullName, avatar } = JSON.parse(localStorage.getItem('auth'));
            return Promise.resolve({ id, fullName, avatar });
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    },
    getSiteSetting: () => {
        const request = new Request(settingUrl, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(setting => {
                console.log(setting);
                return Promise.resolve({ setting });
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
};

export default authProvider;
