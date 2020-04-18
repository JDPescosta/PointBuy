defmodule PointbuyWeb.Resolvers.Races do 

  alias Pointbuy.Races.Races

  def list_races(_,_,_) do 
  
    {
      :ok, Races.list
    }
  
  end 

end