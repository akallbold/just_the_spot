class AddLongToPlaces < ActiveRecord::Migration[5.1]
  def change
    add_column :places, :longitude, :decimal, {:precision=>10, :scale=>6}
  end
end
