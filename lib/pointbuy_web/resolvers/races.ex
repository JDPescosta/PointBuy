defmodule PointbuyWeb.Resolvers.Races do
  alias Pointbuy.Races.Races
  alias Pointbuy.Races.UniqueRacial
  alias Pointbuy.Races.Race

  def list_races(_, _, _) do
    {
      :ok,
      Races.list()
    }
  end

  def load_unique_racials(%Race{id: race_id}, _, _) do
    {
      :ok,
      Races.load_unique_racials(race_id)
    }
  end
end
