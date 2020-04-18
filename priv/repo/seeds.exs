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

Code.require_file("seeds/helpers.exs", __DIR__)

IO.puts "gen test races"
races = Pointbuy.SeedHelpers.seed_races(10)
Pointbuy.SeedHelpers.seed_ability_scores(races)