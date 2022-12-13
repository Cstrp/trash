import axios from 'axios';

interface IEngine {
  velocity: number;
  distance: number;
}

const enum Status {
  started = 'started',
  stopped = 'stopped',
  driver = 'drive',
}

const url = 'http://localhost:3000';

const startEngine = async (id: number): Promise<{ status: number; result: IEngine }> => {
  try {
    const data = await axios.patch(`${url}/engine/${id}&${Status.started}`);
    const res: IEngine = await data.data;

    return {
      status: data.status,
      result: res,
    };
  } catch (error) {
    return {
      status: error.response.status,
      result: error.response.data,
    };
  }
};

const stopEngine = async (id: number): Promise<{ status: number; result: IEngine }> => {
  try {
    const data = await axios.patch(`${url}/engine/${id}&${Status.stopped}`);
    const res: IEngine = await data.data;

    return {
      status: data.status,
      result: res,
    };
  } catch (error) {
    return {
      status: error.response.status,
      result: error.response.data,
    };
  }
};

const switchMode = async (id: number): Promise<number> => {
  try {
    const data = await axios.patch(`${url}/engine/${id}&${Status.driver}`);

    return data.status;
  } catch (error) {
    return error.response.status;
  }
};

export { Status, IEngine, startEngine, stopEngine, switchMode };
