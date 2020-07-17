# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :pointbuy,
  ecto_repos: [Pointbuy.Repo]

# Configures the endpoint
config :pointbuy, PointbuyWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "OotqfA3h6oBirtEkeVDTCCteIZvxFD/MDcghh3EQLyuX5J9f4cA8mVdDhiixqdEd",
  render_errors: [view: PointbuyWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Pointbuy.PubSub, adapter: Phoenix.PubSub.PG2],
  live_view: [signing_salt: "B9igPldY"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :pointbuy, :frontend,
  BASE_URL: System.get_env("BASE_URL")

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"


