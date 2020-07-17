defmodule Pointbuy.RacesTest do
  use ExUnit.Case

  alias Pointbuy.Races.Races

  setup do 
    :ok = Ecto.Adapters.SQL.Sandbox.checkout(Pointbuy.Repo)
  end

  test "loads unique racials" do
    gnome_racials = Races.load_unique_racials(4)
    assert Enum.all?(gnome_racials, fn racial -> 
      racial.race_id == 4
    end)
  end
end