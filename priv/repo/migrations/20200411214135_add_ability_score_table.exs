defmodule Pointbuy.Repo.Migrations.AddAbilityScoreTable do
  use Ecto.Migration

  alias Pointbuy.EctoEnum.Attribute

  def up do
    Attribute.create_type()

    create table(:ability_scores) do
      add :race_id, references(:races), null: false
      add :attribute, :attribute, null: false
      add :ability_bonus, :integer, null: false
      add :dynamic_type, :string
      timestamps()
    end
  end

  def down do
    drop table(:ability_scores)
    Attribute.drop_type()
  end
end
