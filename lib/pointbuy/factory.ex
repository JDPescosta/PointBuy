defmodule Pointbuy.Factory do

    use ExMachina.Ecto, repo: Pointbuy.Repo

    alias Pointbuy.Races.{Race, AbilityScore}
    alias Pointbuy.EctoEnum.Attribute
    

    def race_factory do
    
        %Race {
            name: Faker.Pokemon.name(),
            speed: Enum.random([25, 30, 35])
        }
    
    end

    def ability_score_factory do
    
        %AbilityScore {
            attribute: Enum.random(Attribute.__enum_map__()),
            ability_bonus: Enum.random(0..2),
            race: build(:race)
        }
    
    end

end