import { buildClient, LogLevel } from "@datocms/cma-client-node";
import type { Lang } from "./constants";

export async function getItemsByFilter(filter: string, lang: Lang) {
    return await client.items.list({
        filter: {
          type: filter,
        },
        locale: lang,
        
      });
}

export async function getUploadsByIds(ids: string[]) {
    const idsParam = ids.join(',');
    return await client.uploads.list({
        filter: {
            ids: idsParam
        }
    });
}

const client = buildClient({
    apiToken: import.meta.env.DATO_CMS_API_KEY,
    logLevel: LogLevel.BASIC,
 });