import axios from 'axios';

interface IGetWinner {
  id?: number;
  wins: number;
  time: number;
}

interface IGetWinners {
  id?: number;
  wins: number;
  time: number;
}

interface ICreateWinner {
  id?: number;
  wins: number;
  time: number;
}

interface IUpdateWinner {
  id: number;
  wins: number;
  time: number;
}

interface IDeleteWinner {
  id: number;
}

const url = 'http://localhost:3000';

const getWinner = async (id: number): Promise<{ status: number; result: IGetWinner }> => {
  try {
    const data = await fetch(`${url}/winner/${id}`);
    const res: IGetWinner = await data.json();

    console.log(data);
    console.log(res);

    return {
      status: data.status,
      result: res,
    };
  } catch (e) {
    throw new Error(e);
  }

  // const data = await axios.get(`${url}/winners/${id}`);
  //
  // const res: IGetWinner = <IGetWinner> await data.data.json();
  //
  // switch (res.status) {
  //   case 200:
  //     return { status: 200, result: res.result };
  //   case 404:
  //     throw new Error(`Winner with id ${id} not found`);
  //   default:
  //     return { status: 200, result: res.result };
  // }
};

const getWinners = async (
  page: number,
  sort: string = 'time',
  order: string = 'ASC',
  limit = 10,
): Promise<{ result: Array<IGetWinners>; count: string }> => {
  try {
    const data = await axios.get(`${url}/winners?page=${page}&sort=${sort}&order=${order}&limit=${limit}`);
    const res: Array<IGetWinners> = await data.data;

    return {
      result: res,
      count: data.headers['x-total-count'] || '0',
    };
  } catch (err) {
    throw new Error(err);
  }
};

const createWinner = async (car: ICreateWinner): Promise<number> => {
  try {
    const data = await axios.post(
      `${url}/winners`,
      {
        wins: car.wins,
        time: car.time,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return data.status;
  } catch (err) {
    throw new Error(err);
  }
};

const updateWinner = async (car: IUpdateWinner): Promise<void> => {
  await axios
    .put(
      `${url}/winner/${car.id}`,
      {
        id: car.id,
        wins: car.wins,
        time: car.time,
      },
      { headers: { 'Content-Type': 'application/json' } },
    )
    .catch((e) => {
      throw new Error(e);
    });
};

const deleteWinner = async (car: IDeleteWinner): Promise<void> => {
  await axios.delete(`${url}/winner/${car.id}`).catch((e) => {
    throw new Error(e);
  });
};

export {
  getWinner,
  getWinners,
  createWinner,
  updateWinner,
  deleteWinner,
  IGetWinner,
  IGetWinners,
  ICreateWinner,
  IUpdateWinner,
  IDeleteWinner,
};
