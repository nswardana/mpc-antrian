import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

import configData from "./config.json";

  
const apiUrl = configData.apiUrl
const httpClient = fetchUtils.fetchJson;

const dataProvider = {

  updateItemStatus: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params)
    }).then(({ json }) => ({ data: json })),

  getOrderItemByOrderId: (resource, params) => {
    console.log("getOrderItemByOrderId");
    console.log(params);
    const orderId = params.orderId;
    const url = `${apiUrl}/${resource}/${orderId}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getTotal: (resource, params) => {
    console.log("getTotal");
    const url = `${apiUrl}/${resource}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },


  getAll: (resource, params) => {
    console.log("getAll");
    const url = `${apiUrl}/${resource}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },
  getrebanbystatus: (resource, params) => {
    const url = `${apiUrl}/${resource}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getOrderItemByDate: (resource, params) => {
    console.log("getOrderItemByDate");
    console.log(params.date);
    const date = params.date;
    const url = `${apiUrl}/${resource}/${date}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getOrderItemGroupByProduct: (resource, params) => {
    console.log("getOrderByDate");
    console.log(params.date);
    const date = params.date;
    const url = `${apiUrl}/${resource}/${date}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getList: (resource, params) => {
    console.log("getList");
    console.log(params);

    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter)
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => (
      {
        data: json,
        total: 10
      }
    ));
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json
    })),



  getPerbelanjaanByKeuanganId: (resource, params) => {
    console.log("getKeuanganByOutletId");
    console.log(params);
    const keuanganID = params.id;
    const url = `${apiUrl}/${resource}/${keuanganID}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getKeuanganByOutletId: (resource, params) => {
    console.log("getKeuanganByOutletId");
    console.log(params);
    const outletId = params.id;
    const url = `${apiUrl}/${resource}/${outletId}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },
  getKeuanganByOutletIdperiodeID: (resource, params) => {
    console.log("getKeuanganByOutletIdperiodeID");
    console.log(params);
    const outletId = params.id;
    const periodeId = params.periodeid;
    const url = `${apiUrl}/${resource}/${outletId}/periode/${periodeId}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },
  getOperationByOutletIdperiodeID: (resource, params) => {
    console.log("getOperationByOutletIdperiodeID");
    console.log(params);
    const outletId = params.id;
    const periodeId = params.periodeid;
    const url = `${apiUrl}/${resource}/${outletId}/periode/${periodeId}`;
    console.log("url", url);
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getOneAndItem: (resource, params) => {
    console.log("getKeuanganByOutletId");
    console.log(params);
    const outletId = params.id;
    const url = `${apiUrl}/${resource}/${outletId}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getOneAndItem: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/keuangananditem/${params.id}`).then(({ json }) => ({
      data: json
    })),


  searchKeuanganByOutletId: (resource, params) => {
    console.log("searchKeuanganByOutletId");
    console.log(params);
    const outletId = params.outletId;
    const query = {
      //sort: JSON.stringify([field, order]),
      //range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter)
    };

    const url = `${apiUrl}/${resource}/keuangananditem/${outletId}/?${stringify(query)}`;
    return httpClient(url).then(({ headers, json }) => (
      {
        data: json
      }
    ));
  },


  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids })
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id
      })
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(10)
    }));
  },

  update: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({ data: json })),

  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids })
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({ data: json }));
  },

  createOrigina: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id }
    })),

  create: (resource, params) => {
    return httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data)
    }).then(({ json }) => (
      { data: { ...params.data, id: json.id } })
    );
  },

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE"
    }).then(({ json }) => ({ data: json })),

  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids })
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE"
    }).then(({ json }) => ({ data: json }));
  }
};

export default dataProvider;
