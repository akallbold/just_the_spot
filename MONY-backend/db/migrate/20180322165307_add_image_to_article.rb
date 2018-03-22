class AddImageToArticle < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :img, :string
  end
end
