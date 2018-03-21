class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :url
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
