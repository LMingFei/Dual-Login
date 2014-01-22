class AddtwoDimensionalCodeToUsers < ActiveRecord::Migration
  def change
    add_column :users, :twoDimensionalCode, :string
  end
end
