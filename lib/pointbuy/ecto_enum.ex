defmodule Pointbuy.EctoEnum do
  @moduledoc """
    Attributes is the Enum Strength, Dexterity, Constitution, Intelligence, Wisdom and Charisma.
    Speed, Size and Darkvision are characteristics of the diffence sub/races. 
    As is the playable races can only start with one these values for each Characteristic.
  """

  import EctoEnum

  defenum(Attribute, :attribute, [:str, :dex, :con, :int, :wis, :cha])
  defenum(Speed, :speed, ["25", "30", "35"])
  defenum(Size, :size, ["small", "medium"])
  defenum(Darkvision, :darkvision, ["0", "60", "120"])
end
