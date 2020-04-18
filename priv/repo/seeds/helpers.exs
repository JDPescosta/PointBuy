import Pointbuy.Factory

alias Pointbuy.Repo

defmodule Pointbuy.SeedHelpers do

  def seed_races(num_of_seeds) do 
  
    insert_list(num_of_seeds, :race)
  
  end

  def seed_ability_scores(races) do 
  
    races
    |> Enum.map(fn(race) -> 
      insert(:ability_score, %{race: race})
    end)
  
  end

end