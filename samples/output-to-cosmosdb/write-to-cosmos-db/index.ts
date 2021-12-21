import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { v4 as uuidv4 } from 'uuid'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  if (!req.body || !req.body.user || !req.body.user.id) {
    context.res = {
      status: 400,
      body: {
        message: "User data is missing or invalid."
      }
    }
    return
  }

  context.bindings.outputToItems = JSON.stringify({
    id: uuidv4(), // 一意なIDを設定する. 指定しない場合は、自動的に付与される
    user: req.body.user,
    event: req.body.event
  })
};

export default httpTrigger;
