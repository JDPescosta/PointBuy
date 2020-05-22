# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Pointbuy.Repo.insert!(%Pointbuy.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Pointbuy.Races.Race
alias Pointbuy.Repo

# Code.require_file("seeds/helpers.exs", __DIR__)

# IO.puts "gen test races"
# races = Pointbuy.SeedHelpers.seed_races(10)
# Pointbuy.SeedHelpers.seed_ability_scores(races)

defmodule Pointbuy.Seeds do

  def store_race({:ok, row}) do
    IO.inspect row
    changeset = Race.changeset(%Race{}, row)
    Repo.insert!(changeset)
  end

end

File.stream!("priv/repo/seeds/races_seed.csv")
  |> Stream.drop(1)
  |> CSV.decode(separator: ?|, headers: [:name, :speed, :size, :darkvision, :lifespan, :languages, :img_path])
  |> Enum.each(&Pointbuy.Seeds.store_race/1)