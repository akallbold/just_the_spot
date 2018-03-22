class AddDescriptionToPlaces < ActiveRecord::Migration[5.1]
  def change
    add_column :places, :description, :text
  end
end
