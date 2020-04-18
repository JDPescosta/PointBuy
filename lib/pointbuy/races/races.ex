defmodule Pointbuy.Races.Races do 
  alias Pointbuy.Races.Race
  alias Pointbuy.Repo

  def list() do 
    Race
    |> Repo.all()
  end

  def data do 
    Dataloader.Ecto.new(Pointbuy.Repo)
  end

end