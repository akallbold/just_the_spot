class AddLatToPlaces < ActiveRecord::Migration[5.1]
  def change
        add_column :places, :latitude, :decimal, {:precision=>10, :scale=>6}
  end
end
