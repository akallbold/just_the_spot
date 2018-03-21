class AddLatToPlaces < ActiveRecord::Migration[5.1]
  def change
        add_column :places, :latitude, :float
  end
end
