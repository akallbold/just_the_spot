class User < ApplicationRecord
  has_many :user_places
  has_many :user_articles
  has_many :places, through: :user_places
  has_many :articles, through: :user_articles
end
