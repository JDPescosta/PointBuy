defmodule Pointbuy.Repo do
  use Ecto.Repo,
    otp_app: :pointbuy,
    adapter: Ecto.Adapters.Postgres
end
