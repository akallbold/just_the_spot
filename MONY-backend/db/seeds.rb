require 'nokogiri'
require 'pry'
require 'open-uri'
require_relative '../app/models/article.rb'
require_relative '../app/models/place.rb'
require 'json'

  doc_link = open("http://www.grubstreet.com/bestofnewyork/the-absolute-best-poutine-in-nyc.html")
  nokogiri_doc = Nokogiri::HTML(doc_link)
  list_array = nokogiri_doc.css(".directory-entry")
  list_array.each do |list_item|

    list_hash = {url: list_item.children[1].values[1],
                 title: list_item.children.children.text}
    @article = Article.create(url:list_hash[:url], title:list_hash[:title], img:"")
    place_doc_link = open(@article.url)
    nokogiri_doc = Nokogiri::HTML(place_doc_link)

    @article.update(img:nokogiri_doc.css(".img-data")[1].values[1])
    nokogiri_doc.css(".img-data")
    place_info = nokogiri_doc.css(".clay-paragraph").each_with_index do |place,index|
      @place = Place.create(article_id: @article.id)

#article description
        if index == 0
          @article.update(description: place.children.text)
# place name && place address
        elsif index % 2 != 0
          @place.update({name:place.children[0].children.text})
          # byebug
          # if name =~ /\d*\W/ #regex to find number and period
          # else
          # end

          #   byebug
          #   # find the child of the number
          # end
          address_array = place.children.last.text.split(/[\,;]/)
            if address_array.length == 4
              @place.address = [address_array[0], address_array[2]].join("")
            elsif address_array.length == 3
              @place.address = [address_array[0], "New York City"].join(" ")
            else
              @place.address = name + ", New York City"
            end
            byebug
#place description
        elsif index % 2 == 0 && index != 0
          @place.description = place.children.text
        else "oh no!"
        end

    end
    # byebug
  end


# Article.create(url:"http://www.grubstreet.com/bestofnewyork/best-24-hour-restaurants-nyc.html", title:"The Absolute Best 24-Hour Restaurants in New York")
# Place.create(name:"Veselka", address:"144 Second Ave New York", article_id: 1)
# Place.create(name:"Coppelia", address:"144 Second Ave New York", article_id: 1)
# Place.create(name:"Veselka", address:"144 Second Ave New York", article_id: 1)
# Place.create(name:"Veselka", address:"144 Second Ave New York", article_id: 1)
