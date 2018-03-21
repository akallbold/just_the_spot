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
    @article = Article.create(url:list_hash[:url], title:list_hash[:title])
    place_doc_link = open(@article.url)
    nokogiri_doc = Nokogiri::HTML(place_doc_link)
    place_info = nokogiri_doc.css(".clay-paragraph").each_with_index do |place,index|

      if index == 0
        @article.update(description: place.children.text)
      elsif index % 2 != 0
        # clean up the name
        name = place.children[0].children.text
        # if name =~ /\d*\W/ #regex to find number and period
        #   byebug
        #   # find the child of the number
        # end
        # clean up address
        address_array = place.children.last.text.split(/[\,;]/)
        # address=""
        if address_array.length == 4
          address = [address_array[0], address_array[2]].join("")
        elsif address_array.length == 3
          address = [address_array[0], "New York City"].join(" ")
        else
          address = name + ", New York City"
        end
        place_hash = {name: name, address: address}
        @place = Place.create(name:place_hash[:name], address:place_hash[:address], article_id: @article.id)
      else "oh no!"
      end
    end
  end


# Article.create(url:"http://www.grubstreet.com/bestofnewyork/best-24-hour-restaurants-nyc.html", title:"The Absolute Best 24-Hour Restaurants in New York")
# Place.create(name:"Veselka", address:"144 Second Ave New York", article_id: 1)
# Place.create(name:"Coppelia", address:"144 Second Ave New York", article_id: 1)
# Place.create(name:"Veselka", address:"144 Second Ave New York", article_id: 1)
# Place.create(name:"Veselka", address:"144 Second Ave New York", article_id: 1)
