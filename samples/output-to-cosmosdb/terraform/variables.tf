variable "identifier" {
  type = string
}

variable "location" {
  type    = string
  default = "japaneast"
}

variable "cosmosdb_database" {
  type = object({
    name                     = string
    autoscale_max_throughput = number
  })
}

variable "cosmosdb_container" {
  type = object({
    name               = string
    partition_key_path = string
  })
}
