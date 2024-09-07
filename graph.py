import heapq

class Graph():
  def __init__(self):
    self.graph = {} # dictionary to store the graph

  def add_vertex(self, vertex:int):
    if vertex not in self.graph:
      self.graph[vertex] = []

  def add_edge(self, vertex1:int, vertex2:int, weight: float):
    if vertex1 in self.graph and vertex2 in self.graph:
      self.graph[vertex1].append((vertex2, weight))
      self.graph[vertex2].append((vertex1, weight))

  def print_graph(self):
    for vertex, edges in self.graph.items():
      print(f"{vertex}: {edges}")

  def remove_edge(self, vertex1: int, vertex2: int):
    if vertex1 in self.graph and vertex2 in self.graph:
      self.graph[vertex1].remove(vertex2)
      self.graph[vertex2].remove(vertex1)

  def remove_vertex(self, vertex: int):
    if vertex in self.graph:
      self.graph.pop(vertex)

  def deepth_first_search(self, start_vertex: int):
    visited = set() # visited vertexes
    stack = [start_vertex] # this will control the vertexes to visit

    while stack:
      vertex = stack.pop()

      # If this vertex has'nt been visited yet
      if vertex not in visited:
        # Mark this as visited and print it
        visited.add(vertex)
        print(vertex, end=" ",)

      # Add all vertex's neighbors
      # that haven't been visited yet to the stack
      for neighbor in self.graph[vertex]:
        if neighbor[0] not in visited:
          stack.append(neighbor[0])

  def breadth_first_search(self, start_vertex):
    visited = set()
    queue = [start_vertex]

    while queue:
      vertex = queue[0]
      queue.remove(queue[0])

      if vertex not in visited:
        visited.add(vertex)
        print(vertex, end=" ")

      for neighbor in self.graph[vertex]:
        if neighbor[0] not in visited:
          visited.add(neighbor[0])
          print(neighbor[0], end=" ")
          queue.append(neighbor[0])

  def dijkstra(self, start, end):
    distances = {
      vertex: float('infinity') 
      for vertex in self.graph
    }

    distances[start] = 0
    priority_queue = [(start, 0)]

    while priority_queue:
      current_vertex, current_distance = heapq.heappop(priority_queue)

      if current_distance > distances[current_vertex]:
        continue
    
      for neighbor, weight in self.graph[current_vertex]:
        distance = current_distance + weight

        if distance < distances[neighbor]:
          distances[neighbor] = distance
          heapq.heappush(priority_queue, (neighbor, distance))

    return distances[end] if distances[end] != float('infinity') else None

graph = Graph()
graph.add_vertex(1)
graph.add_vertex(2)
graph.add_vertex(3)
graph.add_vertex(4)
graph.add_vertex(5)
graph.add_vertex(6)
graph.add_vertex(7)
graph.add_edge(1, 2, 10)
graph.add_edge(1, 3, 10)
graph.add_edge(2, 3, 15)
graph.add_edge(3, 4, 1)
graph.add_edge(4, 7, 50)
graph.add_edge(2, 5, 1)
graph.add_edge(5, 7, 8)
graph.add_edge(5, 6, 3)

graph.print_graph()
graph.deepth_first_search(2)
print()
graph.breadth_first_search(2)
print()
print(graph.dijkstra(2, 6))