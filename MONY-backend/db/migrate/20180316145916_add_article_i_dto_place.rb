class AddArticleIDtoPlace < ActiveRecord::Migration[5.1]
  def change
    add_column :places, :article_id, :integer
  end
end
