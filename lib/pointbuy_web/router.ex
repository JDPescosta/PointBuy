defmodule PointbuyWeb.Router do
  use PointbuyWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  # pipeline :api do
  #   plug :accepts, ["json"]
  # end

  scope "/", PointbuyWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api" do
    # pipe_through :api
    forward("/graphiql", Absinthe.Plug.GraphiQL, schema: PointbuyWeb.Schema)
    forward("/", Absinthe.Plug, schema: PointbuyWeb.Schema)
  end
end
