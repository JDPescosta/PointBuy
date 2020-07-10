defmodule PointbuyWeb.Schema do
  use Absinthe.Schema

  alias Pointbuy.Races.Races

  import_types(PointbuyWeb.Schema.RacesTypes)

  query do
    import_fields(:races_queries)
  end

  def context(ctx) do
    loader =
      Dataloader.new()
      |> Dataloader.add_source(Races, Races.data())

    Map.put(ctx, :loader, loader)
  end

  def plugins do
    [Absinthe.Middleware.Dataloader] ++ Absinthe.Plugin.defaults()
  end
end
