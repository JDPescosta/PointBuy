defmodule Pointbuy.Races.UniqueRacial do

  @moduledoc """
    This is a schema of the UniqueRacial table. This should contain all the unique info on each sub/race. 
  """

  use Ecto.Schema
  import Ecto.Changeset

  alias Pointbuy.Races.Race

  @required_fields [
    :race_id,
    :name,
    :racial_text
  ]

  schema "unique_racials" do
    belongs_to :race, Race
    field :name, :string
    field :racial_text, :string
    timestamps()
  end

  def changeset(unique_racial, attrs) do
    unique_racial
    |> cast(attrs, @required_fields, empty_values: [])
    |> validate_required(@required_fields)
  end
end
