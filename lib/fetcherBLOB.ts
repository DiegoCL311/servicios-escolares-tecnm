import axios from "axios";

const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url, {
      responseType: "blob",
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export default fetcher;
