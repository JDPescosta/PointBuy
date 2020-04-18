defmodule Pointbuy.Repo.Migrations.Races do
  use Ecto.Migration

  def change do
    create table(:races) do

      add :name, :string
      add :speed, :integer
      timestamps()
    end 
  end
end
