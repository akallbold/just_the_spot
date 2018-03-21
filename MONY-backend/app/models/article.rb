class Article < ApplicationRecord
  has_many :places
  has_many :user_articles
end
