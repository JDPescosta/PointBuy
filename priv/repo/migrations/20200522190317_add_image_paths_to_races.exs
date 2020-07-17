defmodule Pointbuy.Repo.Migrations.AddImagePathsToRaces do
  use Ecto.Migration

  def change do
    alter table(:races) do
      add :img_path, :string, null: false
    end
  end
end
