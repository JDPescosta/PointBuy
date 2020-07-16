defmodule Pointbuy.Races.AbilityScore do
  @moduledoc """
    This is a schema of the AbilityScore table. Each ability score will have an assigned race and ability bonus.
  """

  use Ecto.Schema
  import Ecto.Changeset

  alias Pointbuy.EctoEnum.Attribute
  alias Pointbuy.Races.Race

  @required_fields [
    :race_id,
    :ability_bonus
  ]

  @optional_fields [
    :attribute,
    :dynamic_type
  ]

  schema "ability_scores" do
    belongs_to :race, Race
    field :attribute, Attribute
    field :ability_bonus, :integer
    field :dynamic_type, :string
    timestamps()
  end

  def changeset(ability_score, attrs) do
    ability_score
    |> cast(attrs, @required_fields ++ @optional_fields, empty_values: [])
    |> validate_required(@required_fields)
  end
end
