defmodule Pointbuy.Repo.Migrations.UpdateRaceTable do
  use Ecto.Migration

  alias Pointbuy.EctoEnum.{Speed, Darkvision, Size}

  def up do
    Speed.create_type()
    Darkvision.create_type()
    Size.create_type()

    alter table(:races) do
      add :lifespan, :integer, null: false
      add :size, :size, null: false
      add :darkvision, :darkvision, null: false
      add :languages, :string, null: false
      remove :speed
      add :speed, :speed, null: false
    end
  end

  def down do
    alter table(:races) do
      remove :languages
      remove :darkvision
      remove :size
      remove :speed
      add :speed, :integer, null: false
    end

    Size.drop_type()
    Darkvision.drop_type()
    Speed.drop_type()
  end
end
