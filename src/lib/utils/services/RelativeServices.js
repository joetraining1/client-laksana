import ApiClient from "../ApiClient";

export const CreateRelative = async ({ data }) => {
  try {
    const payload = new FormData();
    const req = await ApiClient.post("", payload).then((res) => {
      return res.data;
    });
    return req;
  } catch (error) {
    return console.log(error);
  }
};

export const UpdateRelative = async ({ data, id }) => {
  try {
    const req = await ApiClient.put(`/${id}`, {}).then((res) => {
      return res.data;
    });
    return req;
  } catch (error) {
    return console.log(error);
  }
};

export const DeleteRelative = async ({ id }) => {
  try {
    const req = await ApiClient.delete("").then((res) => {
      return res.data;
    });
    return req;
  } catch (error) {
    return console.log(error);
  }
};
