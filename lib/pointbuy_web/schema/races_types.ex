defmodule PointbuyWeb.Schema.RacesTypes do
  @moduledoc """
    The Absinthe schema types.
  """
  use Absinthe.Schema.Notation
  # use Absinthe.Ecto, repo: Pointbuy.Repo'
  import Absinthe.Resolution.Helpers, only: [dataloader: 1, dataloader: 2, dataloader: 3]

  alias Pointbuy.Races.Races

  object :races_queries do
    field :races, list_of(:race) do
      resolve(&PointbuyWeb.Resolvers.Races.list_races/3)
    end
  end

  object :race do
    field :name, :string
    field :speed, :integer
    field :size, :string
    field :darkvision, :string
    field :lifespan, :string
    field :img_path, :string

    field :ability_scores, list_of(:ability_score) do
      resolve(dataloader(Races, :ability_scores))
    end

    field :unique_racials, list_of(:unique_racial) do
      resolve(&PointbuyWeb.Resolvers.Races.load_unique_racials/3)
    end
  end

  object :ability_score do
    field :attribute, :string
    field :ability_bonus, :integer
    field :dynamic_type, :string
  end

  object :unique_racial do
    field :name, :string
    field :racial_text, :string
  end
end
