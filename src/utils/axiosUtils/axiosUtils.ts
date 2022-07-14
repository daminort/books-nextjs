import { AxiosError} from 'axios';

function processError(error: any): void {
  const message = (error as AxiosError).message;
  console.log(message);
}

const axiosUtils = {
  processError,
};

export {
  axiosUtils,
}
