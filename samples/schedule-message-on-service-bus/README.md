# 
## 環境作成メモ

```bash
# Azure functions 用プロジェクトを作成する
func init --language javascript --worker-runtime node

# HTTP リクエストを受け付ける function を作成する
func new --language javascript --template "HTTP trigger" --name schedule-message --authlevel anonymous
# Servive Bus SDK のインストール
npm install --save @azure/service-bus @azure/identity

# Service Bus のメッセージ受信用 function を作成する
func new --language javascript --template "Azure Service Bus Queue trigger" --name receive-message
# Date操作用ライブラリ追加
npm install --save dayjs
```

```bash
# ローカルで Azure Functions を実行する
func host start
```