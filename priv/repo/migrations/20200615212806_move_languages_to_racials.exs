defmodule Pointbuy.Repo.Migrations.MoveLanguagesToRacials do
  use Ecto.Migration

 

  def up do

    alter table(:races) do
      remove :languages
    end
    
  end

  def down do
    
    alter table(:races) do
      add :languages, :string, null: false
    end

  end
  
end
