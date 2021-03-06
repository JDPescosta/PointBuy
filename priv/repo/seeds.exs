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
alias Pointbuy.Races.UniqueRacial
alias Pointbuy.Races.AbilityScore
alias Pointbuy.Repo

# Code.require_file("seeds/helpers.exs", __DIR__)

# IO.puts "gen test races"
# races = Pointbuy.SeedHelpers.seed_races(10)
# Pointbuy.SeedHelpers.seed_ability_scores(races)

defmodule Pointbuy.Seeds do
  def store_race({:ok, row}) do
    IO.inspect(row)
    changeset = Race.changeset(%Race{}, row)
    Repo.insert!(changeset)
  end

  def store_racial({:ok, row}) do
    IO.inspect(row)
    changeset = UniqueRacial.changeset(%UniqueRacial{}, row)
    Repo.insert!(changeset)
  end

  def store_ability_score({:ok, row}) do
    IO.inspect(row)
    changeset = AbilityScore.changeset(%AbilityScore{}, row)
    Repo.insert!(changeset)
  end

  def seed_from_csv(file_name, headers, seed_function) do
    File.stream!("priv/repo/seeds/#{file_name}.csv")
    |> Stream.drop(1)
    |> CSV.decode(separator: ?|, headers: headers)
    |> Enum.each(fn row -> seed_function.(row) end)
  end
end

Pointbuy.Seeds.seed_from_csv(
  "races_seed",
  [:name, :speed, :size, :darkvision, :lifespan, :img_path],
  &Pointbuy.Seeds.store_race/1
)

Pointbuy.Seeds.seed_from_csv(
  "unique_racial_seed",
  [:race_id, :name, :racial_text],
  &Pointbuy.Seeds.store_racial/1
)

Pointbuy.Seeds.seed_from_csv(
  "ability_score_seed",
  [:race_id, :attribute, :ability_bonus, :dynamic_type],
  &Pointbuy.Seeds.store_ability_score/1
)
