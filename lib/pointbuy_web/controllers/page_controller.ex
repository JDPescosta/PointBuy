defmodule PointbuyWeb.PageController do
  use PointbuyWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
