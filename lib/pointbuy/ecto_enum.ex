defmodule Pointbuy.EctoEnum do 
  import EctoEnum

  defenum Attribute, :attribute, [:str, :dex, :con, :int, :wis, :cha]
  defenum Speed, :speed, ["25","30","35"]  
  defenum Size, :size, ["small", "medium"]
  defenum Darkvision, :darkvision, ["0","60","120"]

end