defmodule Pointbuy.Repo.Migrations.CreateUniqueRacialsTable do
  use Ecto.Migration

  def up do
    
    #Attribute.create_type()

    create table(:unique_racials) do 
      
      add :race_id, references(:races), null: false
      add :name, :string, null: false
      add :racial_text, :text, null: false
      timestamps()
    end

  end

  def down do
    drop table(:unique_racials) 
  end
end
