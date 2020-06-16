defmodule Pointbuy.Races.Races do 

  import Ecto.Query
  alias Pointbuy.Races.Race
  alias Pointbuy.Repo
  alias Pointbuy.Races.UniqueRacial

  def list() do 
    Race
    |> Repo.all()
  end

  def data do 
    Dataloader.Ecto.new(Pointbuy.Repo)
  end

  def load_unique_racials(race_id) do
    UniqueRacial
    |> where(race_id: ^race_id)
    |> order_by([asc: :id, asc: :name])
    |> Repo.all() 
  end

end