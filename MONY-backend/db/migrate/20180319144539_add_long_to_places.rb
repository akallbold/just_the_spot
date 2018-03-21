class AddLongToPlaces < ActiveRecord::Migration[5.1]
  def change
    add_column :places, :longitude, :float
  end
end
