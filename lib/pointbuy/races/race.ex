defmodule Pointbuy.Races.Race do

  @moduledoc """ 
    This is a schema of the races table. This should contain all info on each sub/race. 
  """

  use Ecto.Schema
  import Ecto.Changeset

  alias Pointbuy.Races.AbilityScore
  alias Pointbuy.Races.UniqueRacial
  alias Pointbuy.EctoEnum.{Speed, Darkvision, Size}

  @required_fields [

    :name,
    :speed,
    :size,
    :darkvision,
    :lifespan,
    :languages,
    :img_path

  ]


  schema "races" do 

    field :name, :string
    field :speed, Speed
    field :size, Size
    field :darkvision, Darkvision
    field :lifespan, :integer
    field :languages, :string
    field :img_path, :string
    has_many :ability_scores, AbilityScore
    has_many :unique_racial, UniqueRacial 
    timestamps() 

  end

  def changeset(race, attrs) do 
  
    race
    |> cast(attrs, @required_fields, empty_values: [])
    |> validate_required(@required_fields)
  
  end

end