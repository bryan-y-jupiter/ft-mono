import { Envs } from "@/env";
import { APIBodyType, APINames, Apis, JSONResponse, STDResponse } from "./api.def";


export async function stdPost<NAME extends APINames, R>(
  apiName: NAME,
  data: APIBodyType<NAME>,
): Promise<JSONResponse<R>> {
  const { url } = Apis[apiName];
  const requestUrl = `${Envs.API_HOST}${url}`;

  const response = await fetch(requestUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    return ;
  }
  try {
    const json = (await response.json()) as JSONResponse<R>;
    return json;
  } catch (e) {
    return ;
  }
}